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
      selector: '[name]',
      css: {
        'content': 'data(name)',
        'text-valign': 'center',
        'shape': 'rectangle',
        'width': 10,
        'height': 10,
        'background-color': '#28a4fc',
        'border-color': '#2b76ab',
        'border-width': 1
      }
    },
    {
      selector: '[parentBg]',
      css: {
        
        'content': 'data(name)',
        "padding-bottom": "0",
        "padding-top": "0",
        "padding-left": "0",
        "padding-right": "0",
        'text-valign': 'top',
        'text-halign': 'center',
        'shape': 'roundrectangle',
        'border-width': 3,
        'border-color': '#49de49',
        'background-color': 'white'
      }
    },
    {
      selector: '[invisible]',
      css: {
        'height': '1',
        'width': '1',
        'content': '',
        'background-opacity': 0
      }
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'straight',
        'target-arrow-shape': 'triangle',
      }
    },
    {
      selector: '[parentOverlay]',
      css: {
        'z-compound-depth': 'top',
        'background-opacity': 0,
        'border-width': 0
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
    var pp = 40;
    g.forEach(s => {
      x.push(({data:{id:s.name+'parentOverlay', name: '', parentOverlay: true}}))
      x.push({data:{id:s.name, name: s.name, parent: s.name+'parentOverlay', parentBg: true}})
      x.push({ data: { id: s.name + 'c1', parent: s.name , weight: dd, isParent: false,  invisible: true}, position: { y: h, x: dd } })
      h+=pp;
      s.inputs?.forEach(i => {
        x.push({ data: { id: s.name + 'i' + i ,   weight: dd, name: i, isParent: false, right: true, parent: s.name+'parentOverlay'}, position: { y: h, x: dd } })
        h+=pp;
      })
      x.push({ data: { id: s.name + 'c2', parent: s.name , weight: dd, isParent: false,  invisible: true}, position: { y: h, x: dd } })
      x.push({ data: { id: s.name + 'c3', parent: s.name , weight: dd, isParent: false,  invisible: true}, position: { y: j, x: dd+50 } })
      j+=pp;
      s.outputs?.forEach(i => {
        x.push({ data: { id: s.name + 'o' + i ,  weight: dd, name: i, isParent: false, left: true , parent: s.name+'parentOverlay'}, position: { y: j, x: dd+50 } })
        j+=pp;
      })
      x.push({ data: { id: s.name + 'c4', parent: s.name , weight: dd, isParent: false,   invisible: true }, position: { y: j, x: dd+50 } })
      j+=pp;
      h=j=Math.max(h,j)
    })
    
    tt[dd] += Math.max(h,j);
    g.forEach(s => {
      s.deps?.forEach(d => this.nn(s.deps, x, dd-50-200, tt));
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
