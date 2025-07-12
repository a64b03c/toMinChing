import './styles/main.scss';
import { parallax } from './js/parallax';
import { ComputationTime } from './js/ComputationTime';
import { updateDb, getDb } from './js/firebase'

const togetherBtn = document.querySelector('.together');

parallax();
let startTimeInMs;
init()

async function init () {
    try {
        const data = await getDb()
        if (!data.hasStart) togetherBtn.style.display = 'block';
        if (data.hasStart && data) {
            togetherBtn.style.display = 'none';
            startTimeInMs = data.start
            new ComputationTime(".cd", startTimeInMs);
        }
    } catch (error) {
        console.log(error)
    }
}

togetherBtn.addEventListener('click',async () => {
    try {
        await updateDb(true, Date.now())
        init()
    } catch (error) {
        console.log(error)
    }
})






