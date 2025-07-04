export declare class UserService {
    private getTable;
    create(type: string, data: any): Promise<{
        id: number;
        order_id: number;
        method: string;
        status: string;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
    }[] | {
        name: string;
        id: number;
        price: number;
        qunatity: number;
    }[] | {
        name: string;
        id: number;
        email: string;
        age: number | null;
    }[]>;
    findAll(type: string): Promise<({
        id: number;
        name: string;
        email: string;
        age: number | null;
    } | {
        id: number;
        name: string;
        price: number;
        qunatity: number;
    } | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
    } | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    })[]>;
    findOne(type: string, id: number): Promise<{
        id: number;
        name: string;
        email: string;
        age: number | null;
    } | {
        id: number;
        name: string;
        price: number;
        qunatity: number;
    } | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
    } | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    }>;
    update(type: string, id: number, data: any): Promise<{
        id: number;
        name: string;
        email: string;
        age: number | null;
    }[] | {
        id: number;
        name: string;
        price: number;
        qunatity: number;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
    }[] | {
        id: number;
        order_id: number;
        method: string;
        status: string;
    }[]>;
    remove(type: string, id: number): Promise<{
        id: number;
        order_id: number;
        method: string;
        status: string;
    }[] | {
        id: number;
        user_id: number;
        product: string;
        amount: number;
    }[] | {
        name: string;
        id: number;
        price: number;
        qunatity: number;
    }[] | {
        name: string;
        id: number;
        email: string;
        age: number | null;
    }[]>;
}
