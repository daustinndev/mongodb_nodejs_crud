import moment from "moment";
const helpers = {}
moment.locale('es-ES');

helpers.timeago = timestamp => {
  return moment(timestamp).startOf('minute').fromNow()
}

module.exports = helpers