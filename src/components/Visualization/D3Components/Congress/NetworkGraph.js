

import * as d3 from 'd3';

const log = (str) =>{
    console.log(str);
};



d3.json('dataset/Congress/committee_membership.json', (err1, cMembers) =>{
    d3.json('dataset/Congress/committees.json', (err2, committees) =>{
        d3.json('dataset/Congress/legislators.json', (err3, legislators) => {
            if (err1 || err2 || err3)
                alert("Unable to load data");
            else
                render({committees, cMembers, legislators});
        });

    });

});


const render = (data) => {

    // Group each committee by their type (joint, senate, house)
   function searchMembers(thomas_id){
       if (thomas_id in data.cMembers){
           return data.cMembers[thomas_id];
       }else{
           log("Erorr")
       }
    }


   const cm_groups =  d3.nest().key((d) =>{
                            return d.type
                           }).entries(data.committees);
    //console.log(cm_groups, data.cMembers, data.legislators);

    cm_groups.map( (group) => {
        //log(group.key);
        const committees = group.values;
        committees.map( (cmt) =>{
            const membersInCmt = searchMembers(cmt.thomas_id);
            log(membersInCmt)

        });

    });


};
