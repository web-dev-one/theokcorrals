import Layout from "@/app/components/Layout/layout";
import OkCBarn from "@/app/components/Barn";
import '../../app/global.scss'
import '../styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css'

export default function Barn(){

    return(<>
            <Layout>
                <OkCBarn />
            </Layout>
           </>)
}