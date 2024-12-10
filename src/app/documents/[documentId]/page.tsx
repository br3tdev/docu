import Editor from "./editor";
import Toolbar from "./toolbar";

export interface IDocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

export default async function DocumentIdPage({ params }: IDocumentIdPageProps) {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Toolbar />
      <Editor />
    </div>
  );
}
