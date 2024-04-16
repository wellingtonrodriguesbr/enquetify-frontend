import { useEffect, useState } from "react";

export function useWSResults({ pollId }: { pollId: string }) {
  const [votesRealTime, setVotesRealTime] = useState({
    pollOptionId: "",
    votes: 0,
  });

  useEffect(() => {
    const ws = new WebSocket(
      `${process.env.NEXT_PUBLIC_WEBSOCKET_PROTOCOL}${process.env.NEXT_PUBLIC_WEBSOCKET_DOMAIN_URL}/polls/${pollId}/results`
    );

    ws.addEventListener("open", function (event) {
      console.log("Conexão estabelecida");
    });

    ws.addEventListener("message", function (event) {
      const realTime = JSON.parse(event.data);

      return setVotesRealTime({
        pollOptionId: realTime.pollOptionId,
        votes: realTime.votes,
      });
    });

    return () => {
      ws.addEventListener("close", function (event) {
        console.log("Conexão fechada");
      });
    };
  }, [pollId]);

  return {
    votes: votesRealTime.votes,
    pollOptionId: votesRealTime.pollOptionId,
  };
}
