import { LikeComponent} from "./like.component";

const like1 = new LikeComponent(10, true);
console.log(like1.likesCount);
console.log(like1.buttonCount)
like1.onClick();
console.log(like1.likesCount);
console.log(like1.buttonCount);
like1.onClick();
console.log(like1.likesCount);
console.log(like1.buttonCount);