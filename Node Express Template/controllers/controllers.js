

const home = async (req, res) => {

    if (true) {
        res.status(201).json('response from home')
    }
    else {
        res.status(400).json('error')
    }
}

const about = async (req, res) => {
    if(true)
        res.status(201).json('response from about')
    else {
        res.status(400).json('error')
    }
}

module.exports = { home, about };