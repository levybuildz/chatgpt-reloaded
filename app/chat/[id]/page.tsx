import Chat from "../../../components/Chat";
import ChatInput from "../../../components/ChatInput";
import MobileNav from "../../../components/MobileNav";

interface Props {
  params: {
    id: string;
  };
}

export default function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />

      <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 border-white/20 md:border-transparent  md:bg-vert-light-gradient bg-gpt-gray-1 md:!bg-transparent md:bg-vert-dark-gradient bg-gradient-to-t from-gpt-gray-1 to-transparent md:bg-vert-dark-gradient">
        <ChatInput chatId={id} />
        <div className="px-3 pt-2 pb-3 text-center bg-gradient-to-t from-gpt-gray-1 to-transparent md:bg-vert-dark-gradient text-xs text-white/50 md:px-4 md:pt-3 md:pb-6">
          <a
            href="https://openai.com/blog/chatgpt/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Running on ChatGPT
          </a>
          . Made with Love by Levy Loiseau
        </div>
      </div>
    </div>
  );
}
