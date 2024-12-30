import { useQuery } from "@tanstack/react-query";

function FetchReactQuery() {
  async function getTodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }

  const { data, isLoading, error, isRefetching, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: getTodos,
    enabled: false, // This prevents automatic fetching on component mount
    staleTime: 1000 * 60 * 5, // Data will remain fresh for 5 minutes
    cacheTime: 1000 * 60 * 30, // Cache will be preserved for 30 minutes
  });

  console.log(isRefetching);
  if (isLoading) return "Loading...";
  if (error) return "An error occurred: " + error.message;

  return (
    <div>
      <button onClick={() => refetch()}>
        {isRefetching ? "Fetching..." : "Fetch Data"}
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default FetchReactQuery;
