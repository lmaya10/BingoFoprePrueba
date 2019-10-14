import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Fs = new Mongo.Collection('numF');
export const Os = new Mongo.Collection('numO');
export const Ps = new Mongo.Collection('numP');
export const Rs = new Mongo.Collection('numR');
export const Es = new Mongo.Collection('numE');
export const revBingo = new Mongo.Collection('bingo');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('numF', function numF() {
    return Fs.find({});
  });

  Meteor.publish('numO', function numO() {
    return Os.find({});
  });

  Meteor.publish('numP', function numP() {
    return Ps.find({});
  });

  Meteor.publish('numR', function numR() {
    return Rs.find({});
  });

  Meteor.publish('numE', function numE() {
    return Es.find({});
  });

  Meteor.publish('bingo', function bingo() {
  	return revBingo.find({});
  });
}

Meteor.methods({
	'Bingo.insert'(user){
		revBingo.insert({
			usuario: user, 
		})
	},
	'Bingo.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			revBingo.find({}).forEach(function(doc){
  				revBingo.remove(doc._id);
  			});
		}
	},
	'Fs.insert'(i){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Fs.insert({
				numero: i + 1,
				estado: 0
			}); 
		}
	},
	'Os.insert'(i){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Os.insert({
				numero: i + 16,
				estado: 0
			}); 
		}
	},
	'Ps.insert'(i){

		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Ps.insert({
				numero: i + 31,
				estado: 0
			}); 
		}
	},
	'Rs.insert'(i){

		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Rs.insert({
				numero: i + 46,
				estado: 0
			}); 
		}
	},
	'Es.insert'(i){

		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Es.insert({
				numero: i + 61,
				estado: 0
			}); 
		}
	},
	'Fs.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Fs.find({}).forEach(function(doc){
  			Fs.remove(doc._id);
			});
		}
	},
	'Os.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Os.find({}).forEach(function(doc){
  			Os.remove(doc._id);
			});
		}
	},
	'Ps.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Ps.find({}).forEach(function(doc){
  			Ps.remove(doc._id);
			});
		}
	},
	'Rs.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Rs.find({}).forEach(function(doc){
  			Rs.remove(doc._id);
			});
		}
	},
	'Es.remove'(){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Es.find({}).forEach(function(doc){
  			Es.remove(doc._id);
			});
		}
	},
	'Fs.update'(id, valor){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Fs.update({_id: id},{numero: valor, estado: 1})
		}
	},
	'Os.update'(id, valor){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Os.update({_id: id},{numero: valor, estado: 1})
		}
	},
	'Ps.update'(id, valor){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Ps.update({_id: id},{numero: valor, estado: 1})
		}
	},
	'Rs.update'(id, valor){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Rs.update({_id: id},{numero: valor, estado: 1})
		}
	},
	'Es.update'(id, valor){
		if(Meteor.user() != null && Meteor.user().username == "admin")
		{
			Es.update({_id: id},{numero: valor, estado: 1})
		}
	},
})
