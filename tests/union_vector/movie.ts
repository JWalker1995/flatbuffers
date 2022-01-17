// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { Attacker, AttackerT } from './attacker';
import { BookReader, BookReaderT } from './book-reader';
import { Character, unionToCharacter, unionListToCharacter } from './character';
import { Rapunzel, RapunzelT } from './rapunzel';


export class Movie {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
__init(i:number, bb:flatbuffers.ByteBuffer):Movie {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsMovie(bb:flatbuffers.ByteBuffer, obj?:Movie):Movie {
  return (obj || new Movie()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsMovie(bb:flatbuffers.ByteBuffer, obj?:Movie):Movie {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Movie()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('MOVI');
}

mainCharacterType():Character {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : Character.NONE;
}

mainCharacter<T extends flatbuffers.Table>(Type: { new (): T }): T|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union_with_string(new Type(), this.bb_pos + offset) : null;
}

charactersType(index: number):Character|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
}

charactersTypeLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

charactersTypeArray():Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

characters(index: number, obj:any|string):any|string|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__union_with_string(obj, this.bb!.__vector(this.bb_pos + offset) + index * 4) : null;
}

charactersLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static getFullyQualifiedName():string {
  return 'Movie';
}

static startMovie(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addMainCharacterType(builder:flatbuffers.Builder, mainCharacterType:Character) {
  builder.addFieldInt8(0, mainCharacterType, Character.NONE);
}

static addMainCharacter(builder:flatbuffers.Builder, mainCharacterOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, mainCharacterOffset, 0);
}

static addCharactersType(builder:flatbuffers.Builder, charactersTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, charactersTypeOffset, 0);
}

static createCharactersTypeVector(builder:flatbuffers.Builder, data:Character[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]!);
  }
  return builder.endVector();
}

static startCharactersTypeVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
}

static addCharacters(builder:flatbuffers.Builder, charactersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, charactersOffset, 0);
}

static createCharactersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startCharactersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endMovie(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishMovieBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, 'MOVI');
}

static finishSizePrefixedMovieBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, 'MOVI', true);
}

static createMovie(builder:flatbuffers.Builder, mainCharacterType:Character, mainCharacterOffset:flatbuffers.Offset, charactersTypeOffset:flatbuffers.Offset, charactersOffset:flatbuffers.Offset):flatbuffers.Offset {
  Movie.startMovie(builder);
  Movie.addMainCharacterType(builder, mainCharacterType);
  Movie.addMainCharacter(builder, mainCharacterOffset);
  Movie.addCharactersType(builder, charactersTypeOffset);
  Movie.addCharacters(builder, charactersOffset);
  return Movie.endMovie(builder);
}

unpack(): MovieT {
  return new MovieT(
    this.mainCharacterType(),
    (() => {
      let temp = unionToCharacter(this.mainCharacterType(), this.mainCharacter.bind(this));
      if(temp === null) { return null; }
      if(typeof temp === 'string') { return temp; }
      return temp.unpack()
  })(),
    this.bb!.createScalarList(this.charactersType.bind(this), this.charactersTypeLength()),
    (() => {
    let ret = [];
    for(let targetEnumIndex = 0; targetEnumIndex < this.charactersTypeLength(); ++targetEnumIndex) {
      let targetEnum = this.charactersType(targetEnumIndex);
      if(targetEnum === null || Character[targetEnum!] === 'NONE') { continue; }

      let temp = unionListToCharacter(targetEnum, this.characters.bind(this), targetEnumIndex);
      if(temp === null) { continue; }
      if(typeof temp === 'string') { ret.push(temp); continue; }
      ret.push(temp.unpack());
    }
    return ret;
  })()
  );
}


unpackTo(_o: MovieT): void {
  _o.mainCharacterType = this.mainCharacterType();
  _o.mainCharacter = (() => {
      let temp = unionToCharacter(this.mainCharacterType(), this.mainCharacter.bind(this));
      if(temp === null) { return null; }
      if(typeof temp === 'string') { return temp; }
      return temp.unpack()
  })();
  _o.charactersType = this.bb!.createScalarList(this.charactersType.bind(this), this.charactersTypeLength());
  _o.characters = (() => {
    let ret = [];
    for(let targetEnumIndex = 0; targetEnumIndex < this.charactersTypeLength(); ++targetEnumIndex) {
      let targetEnum = this.charactersType(targetEnumIndex);
      if(targetEnum === null || Character[targetEnum!] === 'NONE') { continue; }

      let temp = unionListToCharacter(targetEnum, this.characters.bind(this), targetEnumIndex);
      if(temp === null) { continue; }
      if(typeof temp === 'string') { ret.push(temp); continue; }
      ret.push(temp.unpack());
    }
    return ret;
  })();
}
}

export class MovieT {
constructor(
  public mainCharacterType: Character = Character.NONE,
  public mainCharacter: AttackerT|BookReaderT|RapunzelT|string|null = null,
  public charactersType: (Character)[] = [],
  public characters: (AttackerT|BookReaderT|RapunzelT|string)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const mainCharacter = builder.createObjectOffset(this.mainCharacter);
  const charactersType = Movie.createCharactersTypeVector(builder, this.charactersType);
  const characters = Movie.createCharactersVector(builder, builder.createObjectOffsetList(this.characters));

  return Movie.createMovie(builder,
    this.mainCharacterType,
    mainCharacter,
    charactersType,
    characters
  );
}
}
