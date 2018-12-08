import {connect} from 'react-redux';
import {compose, withState, withHandlers, lifecycle} from 'recompose';
import moment from 'moment';
// Locals
import {getDoctor, getHoursByDate, saveSchedule} from '~/actions';
import {withNotifications, getNavigatorContext} from '~/enhancers';

export const enhancer = compose(
    connect(
        ({user, hourOffer}) => ({user, hourOffer}),
        {getDoctor, getHoursByDate, saveSchedule}
    ),
    withNotifications,
    getNavigatorContext,
    withState('date', 'setDate', moment().format('YYYY-MM-DD')),
    withState('isLoading', 'setLoading', false),
    withState('isLoadingHour', 'setLoadingHour', false),
    withState('hour', 'setHour', ''),
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
        },
        getHour: ({
            docto,
            getHoursByDate,
            setLoadingHour,
            doctor,
            setHour
        }) => async e => {
            console.log(doctor, e);
            setLoadingHour(true);
            await getHoursByDate(doctor.user._id, e);
            setHour('');
            setLoadingHour(false);
        },
        onSchedule: ({
            doctor,
            date,
            hour,
            saveSchedule,
            showSuccessNotification,
            setLoading,
            navigator
        }) => async () => {
            setLoading(true);
            await saveSchedule({doctor: doctor.user._id, date, hour});
            setLoading(false);
            navigator.dismissModal();
            showSuccessNotification('Foi recebido seu agendamento!');
        },
        onChangeHours: ({setHour}) => e => {
            setHour(e);
        }
    }),
    lifecycle({
        async componentDidMount() {
            this.props.setLoading(true);
            await this.props.getDoctor(this.props.doctor.user._id);
            await this.props.getHour(moment().format('YYYY-MM-DD'));
            this.props.setLoading(false);
            // console.log();
        }
    })
);
