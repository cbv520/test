import { Component, OnInit } from '@angular/core';
import * as cytoscape from 'cytoscape';
import { Service } from 'src/app/service';
import { GraphService } from '../../service/graph.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  g: Service[] = [
  ]

  c = [
  ]

  style: cytoscape.Stylesheet[] = [
    {
      selector: '[left]',
      css: {
        'text-halign': 'left'
      }
    },
    {
      selector: '[right]',
      css: {
        'text-halign': 'right'
      }
    },
    {
      selector: 'node',
      css: {
        'content': 'data(name)',
        'text-valign': 'center',
        'shape': 'ellipse',
        'width': 15,
        'height': 15,
      }
    },
    {
      selector: ':parent',
      css: {
        
        'content': 'data(name)',
        "padding-bottom": "0",
        "padding-top": "0",
        'text-valign': 'top',
        'text-halign': 'center',
        'shape': 'roundrectangle',
        'border-width': 3
      }
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle'
      }
    }
  ];

  constructor(graphService: GraphService) { }

  nodes() {
    return this.nn(this.g, [], 0,  {});
  }
  edges() {
    return this.ee(this.c, []);
  }

  ee(c: { src: { name: string; label: string; }; dest: { name: string; label: string; }; topic: string; }[], x: any[]) {
    c.forEach((e,i) => {
      x.push({ data: { id: i, source: e.src.name + 'o' + e.src.label, target: e.dest.name + 'i' + e.dest.label } });
    })
    return x;
  }

  nn(g: Service[], x: any[], dd: number, tt: {[d:number]:number}) {
    console.log((tt))
    if (!tt[dd]) {
      console.log("dd")
      tt[dd] = 0
    } else {
      console.log("ff")
    }
    var hh = 60;
    var h = tt[dd] ;
    var jj = 60;
    var j = tt[dd] ;
    var pp = 80;
    g.forEach(s => {
      x.push({data:{id:s.name, name: s.name, isParent: true}})
      s.inputs?.forEach(i => {
        x.push({ data: { id: s.name + 'i' + i , parent: s.name , weight: dd, name: i, isParent: false, right: true}, position: { y: h, x: dd } })
        h+=i.length*pp;
      })
      h+=70;
      s.outputs?.forEach(i => {
        x.push({ data: { id: s.name + 'o' + i , parent: s.name , weight: dd, name: i, isParent: false, left: true }, position: { y: j, x: dd+50 } })
        j+=i.length*pp;
      })
      j+=70;
    })
    
    tt[dd] += Math.max(h,j);
    g.forEach(s => {
      s.deps?.forEach(d => this.nn(s.deps, x, dd-50-100, tt));
    })
    return x;
  }

  ngOnInit(): void {

    console.log(this.nodes());

    var cy = cytoscape({
      container: document.getElementById('graph-container'),
    
      boxSelectionEnabled: false,
    
      style: this.style,
    
      elements: {
        nodes: this.nodes(),
        edges: this.edges()
      },
    
      layout: {
        name: 'preset',
        avoidOverlap: true
      }
    });

    cy.on('mouseover', 'node', function(event) {
      var node = event.target.data();
      if (!node.parent) {
        console.log(node)
      }
  });
  }

  cdd(a: { data: { weight: number; }; },b: { data: { weight: number; }; }):any{
    console.log("preeee");
    return a.data.weight - b.data.weight;
  }
}
