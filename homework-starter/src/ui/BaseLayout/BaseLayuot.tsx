import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { TextField } from '../TextField'
import { RestaurantListView } from '../../restaurants/RestaurantList'
import { Loader } from '../Loader'
import { useRestList } from '../../hooks/useRestList'
import { contextRaiting } from '../../provider/constextRaiting'
import { useRaiting } from '../../hooks/useRating'



export const BaseLayout = () => {
    const { RestaurantListQuery, setSearchItem, list, searchItem } = useRestList();

    const { mutate } = useRaiting();
    
    switch (RestaurantListQuery.status) {
        case "error":
            return (
                <div>
                    <span>Произошла ошибка!</span>
                    <button onClick={() => RestaurantListQuery.refetch()}>Повторить запрос</button>
                </div>
            );

        case "success":
            return (
                <>
                    <Header />
                    <main>
                        <TextField value={searchItem} placeholder='Search for restaurants' onChange={(e) => setSearchItem(e.target.value)} />
                        <section>
                            <contextRaiting.Provider value={{method: mutate.mutate}}>
                                <RestaurantListView restaurantList={list}/>
                            </contextRaiting.Provider>
                        </section>
                    </main>
                    <Footer />
                </>
            )

        case "pending":
            return <Loader />;
    }
}