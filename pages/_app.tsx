import CommandBar from "@/components/React/CommandBar";
import Layout from "@/components/React/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <CommandBar>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CommandBar>
    );
}

export default MyApp;