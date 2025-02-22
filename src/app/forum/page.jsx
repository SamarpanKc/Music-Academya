import Form from "../components/forums";
import ClientForm from "./ClientForm";
import Esewa from "./esewa";

export default async function App() {
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-8 pt-8 pb-16">
        <Form />
        <ClientForm />
      </div>
    </>
  );
}
