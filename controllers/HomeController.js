
const db = require('../db')

class HomeController {
    // lay all
    index(req, res, next) {
        db.any("select * from movies;")
        .then((data)=> {
            // console.log(data)
            res.render('home',{
                data: data,
                index: true
            })
            // console.log(data)
            // res.render('home', {
            //     title: "Express and Leaflet API", // Give a title to our page
            //     jsonData: data // Pass data to the View
            // });
            
        });
    }
    // lay 1
    getOne(req, res, next) {
        let sql = `select * from movies where id='${req.params.id}';`
        //console.log(sql)
        let id = req.params.id;
        db.any(sql)
        .then((data)=> {
            res.render('detail',{
                data: data,
            })
        });
    }

    // [GET] /search
    search(req, res, next) {
        let sql = `select * from movies where title='${req.params.title}';`
        console.log(sql)
        // db.any(sql)
        
        // .then((data)=> {
        //     res.render('search',{
        //         data: data,
        //     })
        // });
       
    }
}

module.exports = new HomeController();