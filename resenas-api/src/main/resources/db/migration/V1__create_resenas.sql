CREATE TABLE resenas (
    id          UUID         PRIMARY KEY,
    obra_id     VARCHAR(40)  NOT NULL,
    nombre      VARCHAR(60)  NOT NULL,
    puntuacion  SMALLINT     NOT NULL CHECK (puntuacion BETWEEN 1 AND 5),
    texto       VARCHAR(600) NOT NULL,
    fecha       TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE INDEX idx_resenas_obra  ON resenas (obra_id);
CREATE INDEX idx_resenas_fecha ON resenas (fecha DESC);
