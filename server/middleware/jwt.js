
import jwt from 'jsonwebtoken';

const generateToken = (data, secretKey) => {
  let token="";
  if (data.roll == 'user')
    token = jwt.sign({ userData: data }, secretKey, { expiresIn: "1d" });
  else
    token = jwt.sign({ theaterOwnerData: data }, secretKey, { expiresIn: "1d" });

  return token;
};
export { generateToken };


// const verifyToken = (token, secretKey) => {
//   try {
//     const payload = jwt.verify(token, secretKey);
//     console.log("payload on token verifying ",payload)
//     return payload.userData;
//   } catch (error) {
//     console.error('Token verification failed:', error.message);
//     response.status(203).json({ message: "Trying to enter explicitly" });
//   }

//   // console.log("Token in user verifyToken ----->",token);
//   // console.log("secretKey verifyToken---> ",secretKey);
//   // jwt.verify(token,secretKey,(err, payload) => {
//   //   if (err){
//   //     console.log("error in verifyToken ",err);
//   //     response.status(203).json({ message: "Trying to enter explicitly" });
//   //   }
//   //   else {
//   //     console.log("payload on token verifying ",payload)
//   //     return payload.userData;

//   //   }
//   // });
// };
const verifyToken = async (token, secretKey, response) => {
  try {
    const payload = await jwt.verify(token, secretKey);
    console.log("payload on token verifying ", payload);
    return payload;
  } catch (error) {
    console.log('Token verification failed:', error.message);
    response.status(203).json({ message: "Token verification failed" });
  }
}


export { verifyToken };