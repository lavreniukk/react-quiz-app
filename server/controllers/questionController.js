const getQuestions = (req, res) => {
    res.status(200).json({ message: 'Get questions' })
}

const getQuestion = (req, res) => {
    res.status(200).json({ message: `Get question with id ${req.params.id}`})
}

const updateQuestion = (req, res) => {
    res.status(200).json({ message: `Update question with id ${req.params.id}`})
}

const deleteQuestion = (req, res) => {
    res.status(200).json({ message: `Delete question with id ${req.params.id}`})
}

const addQuestion = (req, res) => {
    res.status(200).json({ message: 'Added question' })
}

export {
    getQuestions,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    addQuestion  
}