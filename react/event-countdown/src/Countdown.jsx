function calculateTimeLeft() {
    const now = new Date();
    const target = new Date(2025, 3, 31);
    const timeDiff = target - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
};

export function Countdown({ eventName, eventDate }) {
    const { days, hours, minutes } = calculateTimeLeft(eventDate);

    return (
        <div>
            <h2>{eventName}</h2>
            <DaysLeft days={days} />
            <HoursLeft hours={hours} />
            <MinutesLeft minutes={minutes} />
        </div>
    );
};

const DaysLeft = ({ days }) => <p>{days} days</p>;
const HoursLeft = ({ hours }) => <p>{hours} hours</p>;
const MinutesLeft = ({ minutes }) => <p>{minutes} minutes</p>;