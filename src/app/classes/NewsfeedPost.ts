import {ProfilePagePost} from './ProfilePagePost';
import {ShareLevel} from './ShareLevel';
import {NewsFeedType} from './NewsFeedType';

export class NewsFeedPost extends ProfilePagePost {
  shareLevel: ShareLevel;
  type: NewsFeedType;
}
