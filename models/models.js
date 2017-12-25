'use strict';

const { Pool } = require('pg');

const pool = new Pool({
    user: 'proto_admin@soccer-prototype',
    host: 'soccer-prototype.postgres.database.azure.com',
    database: 'soccer-prototype',
    password: 'SuPerProtAd%0357',
    port: 5432,
    ssl: false,
});

var model = function(){
    
    var getAllCompetitions = function getAllCompetitions(){
        return pool.query('select * from getCompetitions');
    }

    var getCompetition = function getCompetition(competitionid){
        return pool.query('select * from getCompetitions where id=$1', [competitionid]);
    }

    var getCompetitionTeams = function getCompetitionTeams(competitionid){
        return pool.query('select * from getTeamsInCompetition($1)', [competitionid]);
    }
    
    var getCompetitionFixtures = function getCompetitionFixtures(competitionid){
        return pool.query('select * from getCompetitionFixtures($1)', [competitionid]);
    }

    var getTeam = function getTeam(teamid){
        return pool.query('select * from getTeam($1)', [teamid]);
    }

    var getTeamFixtures = function getTeamFixtures(teamid){
        return pool.query('select * from getTeamFixtures($1)', [teamid]);
    }

    var getFixture = function getFixture(fixtureid){
        return pool.query('select * from fixtures where id=$1', [fixtureid]);
    }

    return {
        getAllCompetitions: getAllCompetitions,
        getCompetition: getCompetition,
        getCompetitionTeams: getCompetitionTeams,
        getCompetitionFixtures: getCompetitionFixtures,
        getTeam: getTeam,
        getTeamFixtures: getTeamFixtures,
        getFixture: getFixture
    }
};

module.exports = model;