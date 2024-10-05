{
    // Generic Interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }

    type EmailbWatch = {
        brand: string;
        model: string;
        display?: string;
        hardTrack?: boolean;
    }

    const poorDeveloper : Developer<EmailbWatch> = {
        name: 'Persian',
        computer: {
            brand: "Asus",
            model: "X-509",
            releaseYear: 2001
        },
        smartWatch: {
            brand: 'Nothing',
            model: '4gfdg',
            display: 'oled',
        },
    } 

    type Bike = {
        model: string;
        cc: number
    }
    
    const richDeveloper : Developer<EmailbWatch, Bike> = {
        name: 'rich',
        computer: {
            brand: "Apple",
            model: "X-502",
            releaseYear: 20301
        },
        smartWatch: {
            brand: 'Nothing-Special',
            model: '4gfdgds',
            hardTrack: true,
        },
        bike: {
            model: 'yamaha',
            cc:  155
        }
    } 
}