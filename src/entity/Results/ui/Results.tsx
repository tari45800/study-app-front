export const Results = () => {
  const storedtimerResultso = localStorage.getItem('timerResults');
  const timerResults = storedtimerResultso
    ? JSON.parse(storedtimerResultso)
    : null;

  console.log(timerResults);
  return (
    <div>
      <div>
        {timerResults
          ? timerResults.map((el) => {
              console.log(el);
              return (
                <div>
                  <div>{el.arrivalInfo.city}</div>
                  <div>{el.arrivalInfo.airport}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
