-- Paso 1: Configuración de la conexión
-- Asegúrate de tener la conexión establecida con el CRM y la base de datos de destino.

-- Paso 2: Crear una consulta SQL
-- Ejemplo de consulta para extraer datos del CRM
SELECT CustomerID, FirstName, LastName, Email
FROM CRMDatabase.dbo.Customers
WHERE Country = 'Mexico'

-- Paso 3: Crear una tabla de destino
-- Crea una tabla en la base de datos de destino (DEdelCRM)
CREATE TABLE DEdelCRM (
    CustomerID INT,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100)
)

-- Paso 4: Crear un procedimiento almacenado
-- Crea un procedimiento almacenado que ejecutará la consulta y cargará los datos en la tabla de destino
CREATE PROCEDURE ExtractAndLoadData
AS
BEGIN
    -- Vaciar la tabla de destino antes de cargar nuevos datos (opcional)
    TRUNCATE TABLE DEdelCRM

    -- Ejecutar la consulta y cargar los datos en la tabla de destino
    INSERT INTO DEdelCRM (CustomerID, FirstName, LastName, Email)
    SELECT CustomerID, FirstName, LastName, Email
    FROM CRMDatabase.dbo.Customers
    WHERE Country = 'Mexico'
END

-- Paso 5: Crear una tarea programada
-- Configura una tarea programada para ejecutar el procedimiento almacenado en intervalos regulares
-- Puedes utilizar SQL Server Agent para crear la tarea programada

-- Ejemplo de configuración de tarea programada en SQL Server Agent:
-- 1. Abre SQL Server Management Studio.
-- 2. Conéctate a tu instancia de SQL Server.
-- 3. Navega hasta la carpeta "SQL Server Agent" en el Explorador de objetos.
-- 4. Haz clic derecho en "Tareas" y selecciona "Nueva Tarea...".

-- En la ventana de "Nueva Tarea", configura los detalles de la tarea programada:
-- - Nombre de la tarea: Extract and Load Data
-- - Programar la tarea según tus necesidades (frecuencia, horario, etc.)
-- - En la pestaña "Comandos", ejecuta el procedimiento almacenado:
--   EXEC ExtractAndLoadData

-- Guarda la tarea programada y se ejecutará automáticamente según la configuración establecida.

