import { httpServer } from '@/config/server.config'
import { appDataSource } from '@/config/datasource.config'

//store port
const PORT = process.env.PORT || 4000

//run the server
httpServer.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
    console.log(`======= ENV: ${process.env.NODE_ENV} =======`)

    async function initializeDatasource() {
        try {
            //initialize database connection
            await appDataSource.initialize()
            console.log('Data Source has been initialized!')
        } catch (err) {
            console.error('Error during Data Source initialization', err)
        }
    }

    //kick datasource
    initializeDatasource()
})
