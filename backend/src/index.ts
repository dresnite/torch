import app from './app'

const DEFAULT_PORT: number = 3001

const port: number = parseInt(process.env.PORT ?? '') || DEFAULT_PORT

if(isNaN(port)) {
    throw new Error('The value assigned to the env PORT is not a valid number')
}

app.listen(port, () => {
    console.log(`Torch's backend is running in the port ${port}`)
});