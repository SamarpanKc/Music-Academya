"use client";
import Form from "../components/forums";
import ClientForm from "./ClientForm";
import Esewa from "./esewa";
import { useParams } from 'react-router-dom';

export default function App() {
  const params = useParams();
  const courseId = params.id;

  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-8 pt-8 pb-16 mx-auto">
        <Form courseId={courseId} />
        <ClientForm />
      </div>
    </>
  );
}
