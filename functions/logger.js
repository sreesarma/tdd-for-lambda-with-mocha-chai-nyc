var env = process.env.ENV || 'prod';

function debug(s) {
  if (env == 'dev') {
    console.log(s);
  }
}

function error(s) {
  console.log(s);
}


module.exports = {debug, error}
