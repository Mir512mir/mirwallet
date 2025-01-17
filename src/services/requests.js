import { useHttp } from "../hooks/http.hook";

const useService = () => {
    const { request } = useHttp();

    const apiBase = 'http://49.13.31.246:9191/';
    const token = localStorage.getItem('jwt');
    const routes = {
        signup: 'signup',
        signin: 'signin',
        users: 'users',
        me: 'me',
        transaction: 'transaction'
    };

    //Регистрация
    const POST_REG_USER = async (data) => {
        const res = await request(
            `${apiBase}${routes.signup}`,
            'POST',
            JSON.stringify(data),
        );
        return res;
    };

    //Логин
    const POST_LOGIN_USER = async (data) => {
        const res = await request(
            `${apiBase}${routes.signin}`,
            'POST',
            JSON.stringify(data)
        );
        return res;
    };

    //Получение данных пользователя
    const GET_USER_DATA = async () => {
        const res = await request(
            `${apiBase}${routes.me}`,
            'GET',
            null,
            {
                "content-type": "application/json",
                'x-access-token': token
            }
        );
        return res;
    };

    //Запрос на получения всех юзеров
    const GET_USERS = async () => {
        const res = await request(
            `${apiBase}${routes.users}`,
            'GET',
            null,
            {
                "content-type": "application/json",
                'x-access-token': token
            }
        );
        return res;
    };

    //Запрос на изменение данных (баланса)
    const PUT_CHANGE_DATA = async (dataBalance) => {
        const res = await request(
            `${apiBase}${routes.me}`,
            'PUT',
            JSON.stringify(dataBalance),
            {
                "content-type": "application/json",
                "x-access-token": token
            }
        );
        return res;
    };
    
       
    

    //Запрос на отправку тразакции
    const POST_TRANSACTION = async (dataTransaction) => {
        dataTransaction.userAvatar = "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745";
        dataTransaction.trType = "out";

        const currentDate = new Date();
        dataTransaction.trDate = currentDate.toISOString();

        const res = await request(
            `${apiBase}${routes.transaction}`,
            'POST',
            JSON.stringify(dataTransaction),
            {
                "content-type": "application/json",
                'x-access-token': token
            }
        );
        return res;
    };

    return {
        POST_REG_USER,
        POST_LOGIN_USER,
        GET_USER_DATA,
        PUT_CHANGE_DATA,
        POST_TRANSACTION,
        GET_USERS,
   
    };
}

export default useService;