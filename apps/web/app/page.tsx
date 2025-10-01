import {prisma} from '@repo/db/prisma'

async function Home() {
  const user = await prisma.user.findFirst({
    where:{
      email:"ajeet@gmail.com"
    }
  })
  return (
    <div >
      <h1>User are</h1>
      <div>email:{user?.email}</div>
      <div>Password:{user?.password}</div>
    </div>
  )
}

export default Home