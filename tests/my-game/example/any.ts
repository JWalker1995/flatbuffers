// automatically generated by the FlatBuffers compiler, do not modify

import { Monster as MyGameExample2Monster, MonsterT as MyGameExample2MonsterT } from '../../my-game/example2/monster';
import { Monster, MonsterT } from '../../my-game/example/monster';
import { TestSimpleTableWithEnum, TestSimpleTableWithEnumT } from '../../my-game/example/test-simple-table-with-enum';


export enum Any{
  NONE = 0,
  Monster = 1,
  TestSimpleTableWithEnum = 2,
  MyGame_Example2_Monster = 3
}

export function unionToAny(
  type: Any,
  accessor: (Type: { new (): Monster|MyGameExample2Monster|TestSimpleTableWithEnum }) => Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null
): Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null {
  switch(type) {
    case Any.NONE: return null; 
    case Any.Monster: return accessor(Monster);
    case Any.TestSimpleTableWithEnum: return accessor(TestSimpleTableWithEnum);
    case Any.MyGame_Example2_Monster: return accessor(MyGameExample2Monster);
    default: return null;
  }
}

export function unionListToAny(
  type: Any, 
  accessor: (index: number, Type: { new (): Monster|MyGameExample2Monster|TestSimpleTableWithEnum }) => Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null, 
  index: number
): Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null {
  switch(type) {
    case Any.NONE: return null; 
    case Any.Monster: return accessor(index, Monster);
    case Any.TestSimpleTableWithEnum: return accessor(index, TestSimpleTableWithEnum);
    case Any.MyGame_Example2_Monster: return accessor(index, MyGameExample2Monster);
    default: return null;
  }
}

