import {BackgroundArea, AppArea} from "./components";
import {ColorSchemeProvider} from "./contexts/index.js";
import UserList from "./components/UserList.jsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import SearchArea from "./components/SearchArea.jsx";
import {useState} from "react";

const queryClient = new QueryClient()

export default function UserApp() {
    const [filter, setFilter] = useState({name: ''})

    return (
        <QueryClientProvider client={queryClient}>
            <ColorSchemeProvider>
                <BackgroundArea>
                    <AppArea>
                        <SearchArea placeHolder="Search user in here" onChange={(e) => {setFilter({name: e.target.value})}}></SearchArea>
                        <UserList filter={filter}></UserList>
                    </AppArea>
                </BackgroundArea>
            </ColorSchemeProvider>
        </QueryClientProvider>
    )
}
