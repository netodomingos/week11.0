
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
    //ID Gerado automaticamente!
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    // Relacionamento => Ong que criou o incident
    table.string('ong_id').notNullable()

    // Chave Estrangeira
    // ong_id referencia id da tabela ongs
    table.foreign('ong_id').references('id').inTable('ongs')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
