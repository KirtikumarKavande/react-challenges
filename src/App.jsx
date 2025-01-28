import Carousel from "./carousel/carousel";
import DragDrop from "./drag-N-drop/DragDrop";
import Histogram from "./histogram/Histogram";
import MemoryGame from "./memory game/MemoryGame";
import ModalOverlay from "./modal-overlay/ModalOverlay";
import MovieTicketBooking from "./movie-ticket-booking/MovieTicketBooking";
import NestedComment from "./nested-comment/NestedComment";
import Otp from "./otp/Otp";
import FetchReactQuery from "./react-query/FetchReactQuery";
import StopWatch from "./stopwatch/StopWatch";
import Todos from "./todo/Todos";
import TransferList from "./TransferList/TransferList";
import Folder from "./vs-code-folder-structure/Folder";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const App = () => {
  const queryClient = new QueryClient()

  return (
    <div>
         <QueryClientProvider client={queryClient}>

      {/* <StopWatch /> */}
      {/* <ModalOverlay /> */}
      {/* <Carousel/> */}
      {/* <Otp/> */}
      {/* <MemoryGame/> */}
      {/* <DragDrop/> */}
      {/* <Folder/> */}
      {/* <TransferList/> */}
      {/* <NestedComment/> */}
      {/* <MovieTicketBooking/> */}

      {/* <Histogram/> */}
      {/* <FetchReactQuery/> */}

    
      <Todos/>
      </QueryClientProvider>

    </div>
  );
};

export default App;
