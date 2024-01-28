import clientPromise from '../../lib/mongodb';


const handler = async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("devlinks");

       const users = await db
           .collection("users")
           .find({})
           .sort({ metacritic: -1 })
           .limit(10)
           .toArray();
       res.json(users);
   } catch (e) {
       console.error(e);
   }
};
export default handler