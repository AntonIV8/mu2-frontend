import { Serializer as K1Serializer } from
  '../mixins/regenerated/serializers/i-i-s-mu2-k1';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(K1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
