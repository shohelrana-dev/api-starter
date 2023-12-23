import { httpServer } from '@/config/server.config'

const PORT = process.env.PORT || 4000

//run the server
httpServer.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
    console.log(`======= ENV: ${process.env.NODE_ENV} =======`)
})
