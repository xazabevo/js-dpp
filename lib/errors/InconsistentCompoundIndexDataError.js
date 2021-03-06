const ConsensusError = require('./ConsensusError');

class InconsistentCompoundIndexDataError extends ConsensusError {
  /**
   *
   * @param {string} documentType
   * @param {Object} indexDefinition
   */
  constructor(documentType, indexDefinition) {
    super('Unique compound index properties are partially set');

    this.documentType = documentType;
    this.indexDefinition = indexDefinition;
  }

  /**
   *
   * @return {Object}
   */
  getIndexDefinition() {
    return this.indexDefinition;
  }

  /**
   *
   * @return {string}
   */
  getDocumentType() {
    return this.documentType;
  }
}

module.exports = InconsistentCompoundIndexDataError;
