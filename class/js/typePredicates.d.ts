interface Comedian {
    funny: boolean;
}
interface StandupComedian extends Comedian {
    routine: string;
}
declare function isStandupComedian(value: Comedian): value is StandupComedian;
declare function workWithComedian(value: Comedian): void;
