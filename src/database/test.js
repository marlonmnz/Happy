const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

const saveOrphanages = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-19.9185934",
        lng: "-43.9479574",        
        name: "Lar dos meninos",       
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", 
        whatsapp: "31999995555",
        images: [
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595295425007-985abbb16b92?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",

        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)

    // // deletar um dado da tabela

    console.log (await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log (await db.run("DELETE FROM orphanages WHERE id = '5'"))

    //Finalizado
})