export const vistaHome = ( req , res) => {
    res.render("home", {
        layout:"main",
        title : "Bienvenidos a Node Express y Handlebars 2024",
        productos : [{
                       name :"Banana",
                       imagen :"banana.png",
                     },
                     {
                      name :"Cebollas",
                      imagen :"Cebollas.png",
                    },
                    {
                      name :"Pimenton",
                      imagen :"pimenton.png",
                    },
                    {
                      name :"Papas",
                      imagen :"papas.png",
                    },
                    {
                      name :"Lechuga",
                      imagen :"lechuga.png",
                    },
                    {
                      name :"Tomates",
                      imagen :"tomate.png",
                    },

                  ]

    })
}