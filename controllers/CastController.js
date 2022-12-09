
const db = require('../db')

class CastController {
    // [GET] /
    // index(req, res, next) {
    //     Course.find({})
    //         .then((courses) => {
    //             res.render('home', {
    //                 courses: mutipleMongooseToObject(courses),
    //             });
    //         })
    //         .catch(next);
    // }


    // LAY TAT CA
    index(req, res, next) {
        db.any("select * from casts;")
        .then((data)=> {
            // console.log(data)
            res.render('home',{
                data: data,
                index: false
            })
            // console.log(data)
            // res.render('home', {
            //     title: "Express and Leaflet API", // Give a title to our page
            //     jsonData: data // Pass data to the View
            // });
            
        });
    }

    



    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new CastController();