import { getHousesCall } from '../calls';
import { useHousesStore } from '../stores';

export const useHousesHooks = () => {
  const {
    setHouseList,
    setLoadingHousesList,
    offset,
    setOffset,
    housesList,
    query,
    setQuery,
  } = useHousesStore();

  const onGetHouses = async () => {
    const result = await getHousesCall({
      ...query,
      offset,
    });
    if (offset > 0) {
      setHouseList(
        result.properties ? [...housesList, ...result.properties] : housesList,
      );
    } else {
      setHouseList(result.properties ? result.properties : housesList);
    }
    setOffset(offset + 15);
    setLoadingHousesList(false);
  };

  const onFilterHouses = async receivedQuery => {
    setLoadingHousesList(true);
    if (receivedQuery !== query) {
      setHouseList([]);
      setOffset(0);
    }
    setQuery(receivedQuery);
    const result = await getHousesCall({
      query: receivedQuery,
      offset,
    });
    setHouseList(result.properties ? result.properties : []);
    setLoadingHousesList(false);
  };

  return {
    onGetHouses,
    onFilterHouses,
  };
};
