

import createNode from './D3Node';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;
import React, {Component} from 'react';
import './style.css'
import * as d3 from 'd3';

export default class Ideology extends Component{

     loadData(data_url, def_url){
         return new Promise( (resolve, reject) => {
             d3.csv(`dataset/ideology/${data_url}`, (objects) =>{
                 d3.json(`dataset/ideology/${def_url}`, (err, dataDef) => {
                     if (err){
                         reject(err);
                     }else{
                         resolve({
                             objects,
                             dataDef
                         });
                     }
                 });
             });
         })
     }


    selectIdeology(ideology){
            this.loadData('data.csv', 'definition.json').then( (state) =>{

                // Getting the Data
                const data = state.objects.filter((obj) => {
                    return obj.IDEOLOGY === ideology.toString();
                });
                const dataDef = state.dataDef;
                let info = {};
                //

                for (let category in dataDef){
                    let cat = [];
                    let objectDef = dataDef[category];
                    for (let key in objectDef){
                        const value = objectDef[key];
                        const count = data.filter(
                            (x) =>{
                                return x[category] === key;
                            }
                        ).length;

                        cat.push({
                            group: value,
                            count: count
                        })
                    }
                    if (category !== 'IDEOLOGY'){
                        info[category] = cat;
                    }

                }

                const categories = Object.entries(info);

                this.setState({
                    d3: createNode({
                        cats: categories,
                        width: 1200,
                        height: 1000,
                        x: 0,
                        y:0
                    })
                })

            }, (err) => {
                alert(err)
            });

    };


    constructor(props){
        super(props);
        this.state = {d3: ""};
    }


    componentDidMount() {
          this.selectIdeology(1);

    }

    render(){

        return (
            <div className="container-fluid">

                <div className="row">
                    <h1>Political Ideology </h1>
                    <p>How race, religion, income, education, and age affects one's political ideology?</p>
                    <hr/>
                </div>

                <div className="row">
                    <RD3Component data={this.state.d3}/>
                </div>
              </div>

            )
    }
}
