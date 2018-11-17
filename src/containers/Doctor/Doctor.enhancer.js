import {compose, withState, withHandlers} from 'recompose';
export const enhancer = compose(
    withState('hours', 'setHours', [
        {hour: '08:00', selected: false},
        {hour: '09:00', selected: false},
        {hour: '10:00', selected: false},
        {hour: '11:00', selected: false},
        {hour: '12:00', selected: false},
        {hour: '13:00', selected: false},
        {hour: '14:00', selected: false},
        {hour: '15:00', selected: false},
        {hour: '16:00', selected: false}
    ]),
    withState('searchBarVisible', 'setSearchBarVisibility', {
        visible: true,
        lastValue: 0
    }),
    withHandlers({
        onScroll: ({setSearchBarVisibility, searchBarVisible}) => ({
            nativeEvent
        }) => {
            let visible =
                nativeEvent.contentOffset.y <= 0 ||
                searchBarVisible.lastValue > nativeEvent.contentOffset.y;
            console.log({
                lastValue: nativeEvent.contentOffset.y,
                visible
            });

            if (
                Math.abs(
                    searchBarVisible.lastValue - nativeEvent.contentOffset.y
                ) >= 20
            ) {
                setSearchBarVisibility({
                    lastValue: nativeEvent.contentOffset.y,
                    visible
                });
            }
        }
    })
);
