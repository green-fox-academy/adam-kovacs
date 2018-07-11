module.exports = {

  getSingleQuestion: (sql, database, questionCount) => {
    return new Promise((resolve, reject) => {
      sql.getRandomQuestion(database, questionCount)
        .then(function (questionData) {
          resolve(questionData);
        })
        .catch(error => reject(error));
    });
  },

  getAllQuestions: (sql, database) => {
    return new Promise((resolve, reject) => {
      sql.getQuestions(database)
        .then(function (queryData) {
          resolve(queryData);
        })
        .catch(error => reject(error));
    });
  },

  getRandomQuestionNumber: (sql, database) => {
    return new Promise((resolve, reject) => {
      sql.countRows(database, 'questions')
        .then(function (queryData) {
          return queryData[0]['COUNT (*)'];
        })
        .then(function (rowCount) {
          resolve(Math.ceil(Math.random() * rowCount));
        })
        .catch(error => reject(error));
    })
  },

}