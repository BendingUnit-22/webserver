

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

                        if (count > 0){
                            cat.push({
                                group: value,
                                count: count
                            })
                        }
                    }

                    if (category !== 'IDEOLOGY'){
                        info[category] = cat;
                    }

                }

                const categories = Object.entries(info);
                const colors = ["#DD1C1A", "#086788" , "#FCB414", "#5BC0BE", "#444B6E"];

                this.setState({
                    d3: createNode({
                        cats: categories,
                        width: 1500,
                        height: 1000,
                        x: 0,
                        y:0,
                        colors
                    })
                });
                console.log(info)
            }, (err) => {
                alert(err)
            });

    };


    constructor(props){
        super(props);
        this.state = {d3: "", selection: 4};
    }


    componentDidMount() {
          this.selectIdeology(this.state.selection);
    }


    updateData(event){
        let se =event.currentTarget.value;
        this.setState({selection: se});
        this.selectIdeology(this.state.selection);

    }

    render(){

        const controls = [
            "Extremely liberal",
            "Liberal",
            "Slightly liberal",
            "Moderate; middle of the road",
            "Slightly conservative",
            "Conservative",
           "Extremely conservative"
        ];


        const radioGroup = controls.map( (d, i) => {
            return (
                <label className="btn btn-primary" key={i}>
                    <input name="year" value={i + 1}  type="radio"  checked={(i + 1).toString() === this.state.selection} onClick={this.updateData.bind(this)}/> {d}
                </label>
            )
        });



        return (
            <div className="container-fluid">

                <div className="row text-center navbar-fixed-top">
                    <form className="form">
                        <div className="btn-group" >
                            {radioGroup}
                        </div>
                    </form>
                </div>


                <div className="row text-center heading">
                    <h1>Political Ideology </h1>
                    <p id="subtitle">How race, religion, income, education, and age affects one's political ideology?</p>
                    <p><a href='https://data.world/tom-harrison/ideology-data'>https://data.world/tom-harrison/ideology-data</a></p>
                    <p>  <em>By: </em>Rixing Wu </p>
                </div>


                <div className="row">
                    <RD3Component data={this.state.d3} />
                </div>

            </div>
            )
    }
}
