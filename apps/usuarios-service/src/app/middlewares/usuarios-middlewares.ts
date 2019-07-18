import * as JWT from 'jsonwebtoken';

function verifyToken = (request, response, next) => {
  let token = request.get('Authorization')
}
